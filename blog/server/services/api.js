const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchPosts() {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        if (!response.ok) throw new Error('Erro ao buscar posts');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }
}