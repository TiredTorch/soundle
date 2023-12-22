import { Form, Formik } from "formik"
import { FormTemplateProps } from "./FormTemplate.types"

export const FormTemplate = <Type extends Record<string, unknown>>({
    validationSchema,
    initialValues,
    onSubmit
}: FormTemplateProps<Type>) => {
    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={initialValues} 
            onSubmit={onSubmit}
        >
            {
                ({
                    
                }) => (
                    <Form>
                        <div>
                            
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormTemplate