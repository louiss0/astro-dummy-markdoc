
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

import { DateString } from './src/utilities/index.ts';


export default defineMarkdocConfig({
    
    tags:{
      formatedTime:{
        render: component("./src/components/FormattedDateUsingAString.astro"),
        attributes:{
          dateString:{
            type: DateString,
            required:true 
          }
        },
        selfClosing:true
      },

      figure:{
        render: "figure",
        children:[
          "paragraph",
          "img",
          "ul",
        ]
      },

      abbr: {
        render: component("./src/components/Abbreviation.astro"),
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
