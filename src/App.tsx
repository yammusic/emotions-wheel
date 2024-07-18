import { Wheel } from './components/wheel1/Wheel';
import './App.css';

function App() {
  const items1 = [
    { name: 'Angry', color: '#c84204' },
    { name: 'Scared', color: '#c585b5' },
    { name: 'Happy', color: '#cf7088' },
    { name: 'Powerful', color: '#ffab04' },
    { name: 'Paceful', color: '#2a761e' },
    { name: 'Sad', color: '#1a98cb' },
  ]

  const items2 = [
    { name: 'Hostile', color: '#f5965a' },
    { name: 'Hurt', color: '#f5965a' },
    { name: 'Rage', color: '#f5965a' },
    { name: 'Stressed', color: '#f5965a', flip: true },
    { name: 'Critical', color: '#f5965a', flip: true },
    { name: 'Annoyed', color: '#f5965a', flip: true },
    { name: 'Weak', color: '#d2a0c3', flip: true },
    { name: 'Insecure', color: '#d2a0c3', flip: true },
    { name: 'Confused', color: '#d2a0c3', flip: true },
    { name: 'Threatened', color: '#d2a0c3', flip: true },
    { name: 'Anxious', color: '#d2a0c3', flip: true },
    { name: 'Rejected', color: '#d2a0c3', flip: true },
    { name: 'Optimistic', color: '#dc91a0', flip: true },
    { name: 'Excited', color: '#dc91a0', flip: true },
    { name: 'Playful', color: '#dc91a0', flip: true },
    { name: 'Content', color: '#dc91a0', flip: true },
    { name: 'Accepted', color: '#dc91a0', flip: true },
    { name: 'Interested', color: '#dc91a0', flip: true },
    { name: 'Proud', color: '#ffbe32', flip: true },
    { name: 'Strong', color: '#ffbe32', flip: true },
    { name: 'Courageous', color: '#ffbe32', flip: true },
    { name: 'Appreciated', color: '#ffbe32' },
    { name: 'Faithful', color: '#ffbe32' },
    { name: 'Empowered', color: '#ffbe32' },
    { name: 'Intimate', color: '#41b93c' },
    { name: 'Thoughtful', color: '#41b93c' },
    { name: 'Secure', color: '#41b93c' },
    { name: 'Thankful', color: '#41b93c' },
    { name: 'Trusting', color: '#41b93c' },
    { name: 'Connected', color: '#41b93c' },
    { name: 'Embarrassed', color: '#5fb9e1' },
    { name: 'Indifferent', color: '#5fb9e1' },
    { name: 'Depressed', color: '#5fb9e1' },
    { name: 'Lonely', color: '#5fb9e1' },
    { name: 'Vulnerable', color: '#5fb9e1' },
    { name: 'Remorseful', color: '#5fb9e1' },
  ]

  const items3 = [
    { name: 'Selfish', color: '#f5af87' },
    { name: 'Jealous', color: '#f5af87' },
    { name: 'Furious', color: '#f5af87' },
    { name: 'Irritated', color: '#f5af87', flip: true },
    { name: 'Skeptical', color: '#f5af87', flip: true },
    { name: 'Frustrated', color: '#f5af87', flip: true },
    { name: 'Worthless', color: '#e1c3d7', flip: true },
    { name: 'Inferior', color: '#e1c3d7', flip: true },
    { name: 'Perplexed', color: '#e1c3d7', flip: true },
    { name: 'Nervous', color: '#e1c3d7', flip: true },
    { name: 'Worried', color: '#e1c3d7', flip: true },
    { name: 'Excluded', color: '#e1c3d7', flip: true },
    { name: 'Hopeful', color: '#f0b9be', flip: true },
    { name: 'Energetic', color: '#f0b9be', flip: true },
    { name: 'Aroused', color: '#f0b9be', flip: true },
    { name: 'Joyful', color: '#f0b9be', flip: true },
    { name: 'Valued', color: '#f0b9be', flip: true },
    { name: 'Curious', color: '#f0b9be', flip: true },
    { name: 'Confident', color: '#ffd27d', flip: true },
    { name: 'Successful', color: '#ffd27d', flip: true },
    { name: 'Creative', color: '#ffd27d', flip: true },
    { name: 'Respected', color: '#ffd27d' },
    { name: 'Loyal', color: '#ffd27d' },
    { name: 'Focused', color: '#ffd27d' },
    { name: 'Safe', color: '#9bd27d' },
    { name: 'Relaxed', color: '#9bd27d' },
    { name: 'Serene', color: '#9bd27d' },
    { name: 'Loving', color: '#9bd27d' },
    { name: 'Sensitive', color: '#9bd27d' },
    { name: 'Belonging', color: '#9bd27d' },
    { name: 'Ashamed', color: '#afd7eb' },
    { name: 'Bored', color: '#afd7eb' },
    { name: 'Miserable', color: '#afd7eb' },
    { name: 'Isolated', color: '#afd7eb' },
    { name: 'Fragile', color: '#afd7eb' },
    { name: 'Guilty', color: '#afd7eb' },
  ]

  return (
    <div className="App">
      <Wheel compact items={items3} size={850} style={{ position: 'absolute' }} />
      <Wheel compact items={items2} size={580} style={{ position: 'absolute' }} />
      <Wheel items={items1} />
    </div>
  );
}

export default App;
