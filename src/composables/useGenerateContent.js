import { ref } from "vue";

const mockData = [
  {
    id: 1,
    command: "generateAltText",
    originalText:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    generatedText:
      "A picture containing text, drawing Description automatically generated",
  },
  {
    id: 2,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 3,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 4,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 5,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 6,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 7,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 8,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 9,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
  {
    id: 10,
    command: "generateMetaTitle",
    originalText: "This is a test",
    generatedText: "This is a test",
  },
];

export function useGenerateContent() {
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const objId = ref(0);

  const mutate = async (command, artifact) => {
    try {
      loading.value = true;

      const url = "https://api.respell.ai/v1/run";

      const payload = {
        spellId: "k5-kybt4dHSqlBy5sZREq",
        inputs: {
          command: command,
          artifact: artifact,
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer bff94e46-b5d9-4779-9489-2c5955ea5208",
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(url, options);

      const data = await response.json();
      // the object in outputs has a dynamic key, so we need to use bracket notation
      const output = data?.outputs[Object.keys(data.outputs)[0]];

      objId.value++;

      const obj = {
        id: objId.value,
        command: command,
        originalText: artifact,
        generatedText: output,
      };

      results.value = [...results.value, obj];
      loading.value = false;
    } catch (error) {
      console.error("Oops, something went wrong", error);
      error.value = error.message;
      loading.value = false;
    }
  };

  const remove = (id) => {
    loading.value = true;

    const index = results.value.findIndex((result) => result.id === id);
    results.value.splice(index, 1);

    loading.value = false;
  };

  const redo = async (id) => {
    loading.value = true;

    const index = results.value.findIndex((result) => result.id === id);
    const result = results.value[index];

    await mutate(result.command, result.generatedText);
    remove(id);

    loading.value = false;
  };

  return { results, loading, error, mutate, remove, redo };
}
