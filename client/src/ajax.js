import { service } from "./store.js";

const getresponse = async (res) => {
  const contenttype = res.headers.get("content-type");
  if (contenttype.indexOf("json") > -1) return await res.json();
  else if (contenttype.indexOf("text") > -1) return await res.text();
  throw new Error(`Unsupported response content-type: ${contenttype}`);
};

let buildRequest = async (method, url, addedoptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      let options = {
        method: method,
        headers: {
          "Content-type": "application/json"
        }
      };
      if (addedoptions) options = { ...options, ...addedoptions };
      const res = await fetch(`${service}${url}`, options);
      resolve(await getresponse(res));
    } catch (e) {
      reject(e);
    }
  });
};

let setAdditionalOptions = (body, addedoptions) => {
  if (body) {
    addedoptions = {
      body: JSON.stringify(body),
      ...addedoptions
    };
  }
  return addedoptions;
};

export default {
  get: async (url, addedoptions) => {
    return buildRequest("GET", url, addedoptions);
  },
  post: async (url, body, addedoptions) => {
    return buildRequest("POST", url, setAdditionalOptions(body, addedoptions));
  },
  put: async (url, body, addedoptions) => {
    return buildRequest("PUT", url, setAdditionalOptions(body, addedoptions));
  },
  delete: async (url, body, addedoptions) => {
    return buildRequest(
      "DELETE",
      url,
      setAdditionalOptions(body, addedoptions)
    );
  },
};
