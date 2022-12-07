import { Competence } from "../model/competence.model";

class CompetenceService {

    private readonly _competenceUrl = 'http://localhost:8080/competences';

    public findAll(): Promise<Competence[]> {
        return fetch(this._competenceUrl)
            .then(response => response.json());
    }

    public save(competence: Competence){
        return fetch(this._competenceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(competence)
        }).then(response => response.json());
    }

    public deleteById(id: string){
        return fetch(this._competenceUrl + '/' + id, {
            method: 'DELETE'
        });
    }

}

export const competenceService = new CompetenceService();