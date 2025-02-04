import './Footer.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">Teste o Premium de graça!</p>
                <p className="disclaimer-premium__subtitle">
                Inscreva-se para curtir músicas ilimitadas e podcasts sem anúncios. Não precisa de cartão de
                crédito.
                </p>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer;