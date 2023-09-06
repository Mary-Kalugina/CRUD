export default class Requests {
    static update(updateCards: (cards: {id: number | string, content: string}[]) => void) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://server-crud-km8u.onrender.com/notes');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.response);
                updateCards(data);
            } catch (e) {
                console.error(e);
            }
            }
        };
        xhr.send();
    }

    static delete(id: number | string, updateCards: (cards: { id: string | number; content: string; }[]) => void) {
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", `https://server-crud-km8u.onrender.com/notes/${id}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    this.update(updateCards)
                } catch (e) {
                    console.error(e);
                }
            }
        };
        xhr.send();
    }

    static add(data: {id: number | string, content: string}, updateCards: (cards: { id: string | number; content: string; }[]) => void) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://server-crud-km8u.onrender.com/notes');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    this.update(updateCards)
                } catch (e) {
                    console.error(e);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }
}