import { FormikProps } from "formik"

export type SearchFormProps = {
    formik: FormikProps<{
        searchRequest: string
    }>
}