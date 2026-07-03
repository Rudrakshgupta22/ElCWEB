import landingpage from '../../landingpage.png';

function IntroScreen({ isVisible, isExiting }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={`intro-overlay${isExiting ? ' exiting' : ''}`} aria-hidden="true">
      <img src={landingpage} alt="ELC welcome artwork" className="intro-image" />
      <div className="intro-backdrop" />
      <div className="intro-content">
        <div className="intro-text">
          <h1 className="intro-title">Welcome to ELC</h1>
          <p className="intro-subheading">A student led corporation making leaders of tomorrow</p>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
