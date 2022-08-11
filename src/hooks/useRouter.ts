import {generatePath, useNavigate} from 'react-router-dom';

export default function useRouter() {
    const navigate = useNavigate()

    const goToRoute = (route: string, params: {[key: string]: string | number | undefined} | null = null) => {
        navigate(params
            ? generatePath(route, {
                pageNumber: route.includes(':pageNumber') ? '1' : undefined,
                ...params,
            })
            : route);
    };

    return {
        goToRoute,
    }
}