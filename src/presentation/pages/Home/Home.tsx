import { Navbar } from '../../components/Navbar/Navbar';
import { Hero } from '../../components/Hero/Hero';
import { BeerGallery } from '../../../components/BeerGallery';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import { SubscribeForm } from '../../components/SubscribeForm/SubscribeForm';
import { Footer } from '../../components/Footer/Footer';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <BeerGallery />
      <WhatsAppButton />
      <SubscribeForm />
      <Footer />
    </div>
  );
}
