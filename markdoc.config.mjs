import FormattedDateUsingAString from "/src/components/FormattedDateUsingAString.astro"

import { defineMarkdocConfig } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
   functions:{
    uppercase: {
      transform(parameters,) {
        const string = parameters[0];
    
        return typeof string === 'string' ? string.toUpperCase() : string;
      },
    }
   },
    tags:{
      formatedTime:{
        render:FormattedDateUsingAString,
        attributes:{
          dateString:{
            type:String,
            required:true 
          }
        },
        selfClosing:true
      }
    }
})
