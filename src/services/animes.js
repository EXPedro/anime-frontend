import { http } from './config'

export default {
    listar: () => {
        return http.get('animes')
    },

    /*salvar:(anime)=>{
		return http.post('anime', anime);
    },
    
	atualizar:(anime)=>{
		return http.put('anime', anime);
    },*/

	/*apagar:(anime)=>{
		return http.delete('anime', { data: anime })
	}*/
}