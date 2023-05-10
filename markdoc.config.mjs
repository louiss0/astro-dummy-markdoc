import FormattedDateUsingAString from "/src/components/FormattedDateUsingAString.astro"

import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import { DateString, generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn } from "./src/utilities";
export default defineMarkdocConfig({
   functions:{
    uppercase: generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn(
      ((value) =>{
        
        console.log(Date.parse(value))
        typeof value === 'string' ? value.toUpperCase() : value
      })
    ) 
   },
    tags:{
      formatedTime:{
        render: FormattedDateUsingAString,
        attributes:{
          dateString:{
            type: DateString,
            required:true 
          }
        },
        selfClosing:true
      }
    }
})
