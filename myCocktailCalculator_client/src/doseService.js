class DoseService {

    constructor(endpoint) {
        this.endpoint =  endpoint
    }  


    getDoses() {
        fetch(`${this.endpoint}/doses`)
        .then(resp => resp.json())
        .then(doses => {
            for (const dose of doses) {
                const d = new Dose(dose)
            } 
        })
    }





}