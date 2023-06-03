import {defineMarkdocConfig } from "@astrojs/markdoc/src/config";

const MARKDOC_ERROR_LEVEL = Object.freeze([
"debug",
"info",
"warning",
"error",
"critical",
]as const)

type MarkdocErrorLevel = typeof MARKDOC_ERROR_LEVEL[number]

type MardocErrorObject =  ReturnType<typeof generateMarkdocErrorObject>

type MarkdocConfig = Parameters<typeof defineMarkdocConfig>[0] 

type MarkdocParamObject= Record<number, unknown>

type AllowedTransformations = string
| number
| Array<any>
| Record<string, string| number>

function generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn(cb:(value:unknown)=> AllowedTransformations) {
    
    return Object.freeze({
        transform(parameters:MarkdocParamObject,){

            return cb(parameters[0])
        }
    })
}

const markdocFilter = generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn

function generateMarkdocErrorObject(id:string,level:MarkdocErrorLevel,message:string) {
    
    return Object.freeze({id,level,message})
}

abstract class MarkdocValidatorAttribute {


    abstract transform(value:unknown, config:MarkdocConfig):AllowedTransformations

    validate(value:unknown, config:MarkdocConfig){

        const res = this.returnMardocErrorObjectOrNull(value, config)
        return res ? [res]: []

    }

    abstract returnMardocErrorObjectOrNull(
        value:unknown, 
        config:MarkdocConfig
        ):MardocErrorObject | null

}




class DateString extends MarkdocValidatorAttribute {


    override transform(value:string){

        return value
    }

    override returnMardocErrorObjectOrNull(value:unknown, ) {

        return typeof value !== 'string' || isNaN(Date.parse(value))
        ? generateMarkdocErrorObject(
                'invalid-datetime-type',
                'critical',
                'Must be a string with a valid date format'
        ) : null
    }

}







export {
    MarkdocValidatorAttribute,
    generateObjectWithTransformFunctionUsingACallbackWithFirstParameterPassedIn,
    MARKDOC_ERROR_LEVEL,
    DateString
}









