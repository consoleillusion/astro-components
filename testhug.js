import { InferenceClient } from '@huggingface/inference'
const hf = new InferenceClient(process.env.HUGGING_FACE_API_KEY)
const MODEL = 'meta-llama/Meta-Llama-3-8B-Instruct'

const prompt = `Create JSON for a person: {name: string, age: number}`;
const response = await axios.post(`https://router.huggingface.co/hf-inference/${MODEL}`, 
  { inputs: prompt, parameters: { max_new_tokens: 100 }}, 
  { headers: { Authorization: `Bearer ${TOKEN}` }}
);
console.log(JSON.parse(response.data[0].generated_text));
