import { useEffect, useState } from "react";
import { Competence } from "../model/competence.model";
import { competenceService } from "../services/competence.service";

export const CompetenceListe = () => {

    const [competences, setCompetences] = useState<Competence[]>([]);

    useEffect(() => {
        competenceService.findAll().then(setCompetences);
    }, []);

    const onClick = () => {
        competenceService.save({
            
            nom: "Nouvelle compétence",
            description: "Description de la nouvelle compétence",
        }).then((competence) => {
            setCompetences([...competences, competence]);
        });
    }

    const onDelete = (competenceId: string) => {
        competenceService.deleteById(competenceId).then(() => {
            setCompetences(competences.filter((competence) => competence.id !== competenceId));
        });
    }
    return (
        <div>
            <ul>
                {competences.map(comp=> <li>
                    {comp.nom} : {comp.description} 
                    <button onClick={()=>onDelete(comp.id || "")}>DELETE</button>
                </li>)}
            </ul>
            <button onClick={onClick} >Ajouter</button>
        </div>
    );
};