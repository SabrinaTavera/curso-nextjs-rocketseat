import { useRouter } from "next/router";

export default function Segments() {

    const router = useRouter();

    const segments = router.query.slug as string[];
    return <h1>segments : {segments?.join('/')}</h1>
}