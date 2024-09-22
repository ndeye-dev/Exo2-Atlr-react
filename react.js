
const Compteur = () => {
    const [compter, setCompteur] = React.useState(0);

    const increment = () => {
        setCompteur(compter + 1);
    };

    const decrement = () => {
        setCompteur(compter - 1);
    };

// le jsx
    return (
        <div>
            <h1>Cliquez sur un button pour incrémenter ou décrémenter</h1>
            <p>Compteur: {compter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

// Créer un élément div 
const element = document.createElement('div');
document.body.appendChild(element);

ReactDOM.render(<Compteur />, element);