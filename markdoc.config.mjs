import FormattedDateUsingAString from "/src/components/FormattedDateUsingAString.astro"
import Abbreviation from "/src/components/Abbreviation.astro"

import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import { DateString, generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn } from "./src/utilities";
export default defineMarkdocConfig({
   functions:{
    uppercase: generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn(
      ((value) => typeof value === 'string' ? value.toUpperCase() : value
      )
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
      },
      abbr: {
        render:Abbreviation,
        attributes:{
          primary:{
            type:String,
            render:false,
            required:true 
          }
        },
        selfClosing:true
      }
    }
})
