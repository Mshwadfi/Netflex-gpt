import OpenAI from 'openai';
import {openAi_key} from './Links';
const openAi = new OpenAI({
  apiKey: openAi_key, 
  dangerouslyAllowBrowser: true,
});

export default openAi;