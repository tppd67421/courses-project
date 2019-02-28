export default function getResponse(response: Promise<any>): any {
    return response.then((response: Response) => response.json());
}