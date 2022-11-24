import { useNavigate } from 'react-router-dom'

const useHistory = () => {
    const navigate = useNavigate()
    return navigate
}

export default useHistory