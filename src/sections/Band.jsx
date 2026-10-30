import ScrollVelocity from '../components/rb/ScrollVelocity.jsx';

const WORDS = ['AI agents', 'Automations', 'Websites', 'Web apps', 'Voice AI', '3D renders', 'Short-form video'];

export default function Band() {
  return (
    <div className="band" aria-label={WORDS.join(', ')}>
      <ScrollVelocity
        texts={[
          <span key="a" className="band__row">
            {WORDS.map(w => (
              <span key={w}>
                {w}
                <i>✳</i>
              </span>
            ))}
          </span>
        ]}
        velocity={34}
        numCopies={4}
        skewWithVelocity={5}
        parallaxClassName="band__parallax"
        scrollerClassName="band__scroller"
      />
    </div>
  );
}
