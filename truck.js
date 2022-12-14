const trucks = []

const addTruck = (truck) => {

    const container = document.querySelector('#container')
       console.log(container)
    const newTruck = document.createElement('div')
        newTruck.className ='truck'
        container.appendChild(newTruck)
        console.log(newTruck)
    const label = document.createElement('div')
    label.className = 'label'
    label.id = `${truck.id}`
        newTruck.appendChild(label)
        console.log(label)
      const id = document.createElement('h3')
      id.innerText = truck.id
       label.appendChild(id)
       console.log(id)
const data = document.createElement("ul")
     data.className = 'data'
     newTruck.appendChild(data)
     console.log(data)
    const parc = document.createElement('li')
    parc.innerText = `${truck.parc} Parcels`
        data.appendChild(parc)
        console.log(parc)
    const weight = document.createElement('li')
      weight.innerText = `${truck.weight} Kg`
         data.appendChild(weight)
         console.log(weight)
}
const loader = () => {

    trucks.forEach((truck => 
        addTruck(truck)
    ))
}

loader()


const addParcels = (event) => {
    event.preventDefault()

        const truckID = document.querySelector("#Id")
        const parcels = document.querySelector("#parcels")
        const weight = document.querySelector("#weight")

    let found = false;

    const truck = trucks.find(truck => truck.id === Number(truckID.value))

    if (truck) {
        found = true
        truck.parc += Number(parcels.value)
        truck.weight +=  Number(weight.value)
        
        const ahhhhhhh = document.querySelector('#container')
        console.log(ahhhhhhh)
        for (let i = 0; i < trucks.length; i++) {
            ahhhhhhh.removeChild(document.querySelector('.truck'))
        }
        

        loader()
    }
    if (!found) {
        const newTruck = {
         id: Number(truckID.value),
        parc: parcels.value,
         weight: weight.value
        }
        trucks.push(newTruck)
        addTruck(newTruck)
    }


}
const removeParcels = (event) => {
    event.preventDefault()

    const truckID = document.querySelector("#Id")
    const parcels = document.querySelector("#parcels")
    const weight = document.querySelector("#weight")

    let found = false

    const truck = trucks.find(truck => truck.id === Number(truckID.value))
    
    if (truck) {
        found = true
     if(truck.load != 0)
        {
            truck.parc -= Number(parcels.value)
        truck.weight -=  Number(weight.value)

     if (truck.load === 0){truck.weight = 0}

        const old = document.querySelector('#container')
        console.log(old)
        for (let i = 0; i < trucks.length; i++) {
            old.removeChild(document.querySelector('.truck'))
        }
        

        loader()
    }
    }
    
    if (!found) {
    throw Error(`${truckID.value} doesn't exist y zaky`)
    }
}

const load = document.querySelector("#load")
const unload = document.querySelector("#unload")


load.addEventListener('click', addParcels)
unload.addEventListener('click', removeParcels)