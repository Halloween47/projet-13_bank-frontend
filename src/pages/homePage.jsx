import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import FeatureItem from './components/featureItem';
import iconChat from '../src/assets/img/icon-chat.png'
import iconMoney from '../src/assets/img/icon-money.png'
import iconSecurity from '../src/assets/img/icon-security.png'

function HomePage() {
    return (
        <div className="App">
    <Header />
    <main>
    <Hero />
    <section className="features">
    <h2 className="sr-only">Features</h2>
    <FeatureItem image={iconChat} titre="You are our #1 priority" texte="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
    <FeatureItem image={iconMoney} titre="More savings means higher rates" texte="The more you save with us, the higher your interest rate will be!" />
    <FeatureItem image={iconSecurity} titre="Security you can trust" texte="We use top of the line encryption to make sure your data and money is always safe." />
    </section>
    </main>
    <Footer />
    </div>
    )
}
export default HomePage;