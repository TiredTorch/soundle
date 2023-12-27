import { FC } from 'react'
import { useGetTranslation } from '@/hooks'
import { TextArea } from '@/components'
import { SearchFormProps } from './SearchForm.types'

export const SearchForm: FC<SearchFormProps> = ({
    formik
}) => {
    const {
        translations: {
          TXT_FRIENDS_PAGE,
        }
    } = useGetTranslation()

    return (
        <form>
            <TextArea
                name="searchRequest"
                placeholder={TXT_FRIENDS_PAGE.SEARCH_TITLE}
                inputClassname='pb-[10px] pl-[5px]'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.searchRequest}
            />
        </form>
    )
}

export default SearchForm