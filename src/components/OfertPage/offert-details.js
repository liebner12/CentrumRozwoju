import React from "react"

const OffertDetails = ({ params }) => {
  return (
    <div>
      {params == 1 ? (
        <div>
          <h1>Sala nr 1</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      ) : params == 2 ? (
        <div>
          <h1 className="title">Biofeedback</h1>
          <p className="description">
            BIOFEEDBACK czyli jedna z najnowocześniejszych form
            neurorehabilitacji, której skuteczność i zakres możliwości
            terapeutycznych są bardzo efektywne. Jak to wygląda? Oprócz
            atrakcyjnej formy, która na pewno spodoba się dzieciom, bazujemy na
            nowoczesnym sprzęcie - podopieczny siada przed monitorem na fotelu,
            na którym wyświetla się wideogra. Dziecko świadomie zmieniając
            natężenie fal mózgowych ma wpływ na jej przebieg. Metoda Biofeedback
            zwiększa świadome wpływanie na pracę mózgu i zmusza do utrzymania
            dużego stopnia koncentracji. Stosuje się ją u dzieci,młodzieży oraz
            dorosłych: z problemami szkolnymi (dysleksja, dysgrafia,
            dysortografia), zaburzenia uwagi, koncetracji i zachowania.
          </p>
        </div>
      ) : params == 3 ? (
        <div>
          <h1 className="title">Sala nr 3</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      ) : (
        <div>
          <h1>Sala nr 4</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}
    </div>
  )
}

export default OffertDetails
