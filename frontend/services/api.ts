export function getHello(): Promise<string> {
    return fetch('http://127.0.0.1:5000/getHello')
        .then(response => response.json()) 
        .then(data => data);
}