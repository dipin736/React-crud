import React, { useEffect, useState } from 'react';

const Home = () => {
  const getInitialCards = () => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    return storedCards;
  };

  const [cards, setCards] = useState(getInitialCards());
  const [newCard, setNewCard] = useState({
    title: '',
    imageUrl: '',
  });
  const [selectedCard, setSelectedCard] = useState(null);

  const saveToLocalStorage = (updatedCards) => {
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const fetchAndSetCards = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newCards = data.map((image) => ({
        id: image.id,
        title: `Card ${image.id}`,
        imageUrl: image.download_url,
      }));
      setCards(newCards);
      saveToLocalStorage(newCards);
    } catch (error) {
      console.error('Error fetching images from Lorem Picsum API:', error.message);
    }
  };

  useEffect(() => {
    if (cards.length === 0) {
      fetchAndSetCards();
    }
  }, [cards]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleCreateCard = () => {
    const updatedCards = [
      ...cards,
      {
        id: Date.now(),
        title: newCard.title,
        imageUrl: newCard.imageUrl || 'https://via.placeholder.com/150',
      },
    ];
    setCards(updatedCards);
    saveToLocalStorage(updatedCards);
    setNewCard({ title: '', imageUrl: '' });
  };

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setNewCard({
      title: card.title,
      imageUrl: card.imageUrl,
    });
  };

  const handleEditCard = () => {
    if (selectedCard) {
      const updatedCards = cards.map((card) =>
        card.id === selectedCard.id ? { ...card, title: newCard.title } : card
      );
      setCards(updatedCards);
      saveToLocalStorage(updatedCards);
      setSelectedCard(null);
      setNewCard({ title: '', imageUrl: '' });
    }
  };

  const handleDeleteCard = () => {
    if (selectedCard) {
      const updatedCards = cards.filter((card) => card.id !== selectedCard.id);
      setCards(updatedCards);
      saveToLocalStorage(updatedCards);
      setSelectedCard(null);
      setNewCard({ title: '', imageUrl: '' });
    }
  };
  
  return (
    <div className="relative flex flex-grow flex-col items-start justify-between  self-stretch font-semibold leading-loose tracking-wide" >
    <div className="relative flex items-center justify-center self-stretch text-left text-[40px] leading-loose text-black" >
      <div className="absolute inset-0">My Projects</div>
      <div className="relative flex-grow self-stretch">
        My Projects
      </div>
    </div>
    <div className="flex w-96 flex-grow items-center justify-center">
      <div className="flex flex-grow flex-col items-center justify-center gap-y-0.5 self-stretch rounded-xl bg-white px-6 pt-3.5 pb-1.5" >
        <div className="h-44 w-96">
          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="180" rx="10" fill="#FA782F" fill-opacity="0.4"/><g clip-path="url(#clip0_101_12)"><path d="M191.542 81.6667C195.474 81.6608 199.319 82.8297 202.583 85.0233V72.8333C202.583 70.4906 201.653 68.2438 199.996 66.5872C198.34 64.9307 196.093 64 193.75 64H162.833C160.491 64 158.244 64.9307 156.587 66.5872C154.931 68.2438 154 70.4906 154 72.8333V103.75C154 106.093 154.931 108.34 156.587 109.996C158.244 111.653 160.491 112.583 162.833 112.583H175.023C173.024 109.591 171.875 106.113 171.698 102.518C171.521 98.9243 172.323 95.3496 174.019 92.1757C175.715 89.0019 178.241 86.3479 181.327 84.4971C184.413 82.6463 187.943 81.668 191.542 81.6667Z" fill="white"/><path d="M191.542 86.0833C188.484 86.0833 185.496 86.99 182.953 88.6885C180.411 90.3871 178.43 92.8014 177.26 95.626C176.09 98.4507 175.784 101.559 176.38 104.557C176.977 107.556 178.449 110.31 180.611 112.472C182.773 114.634 185.527 116.107 188.526 116.703C191.524 117.299 194.633 116.993 197.457 115.823C200.282 114.653 202.696 112.672 204.395 110.13C206.093 107.588 207 104.599 207 101.542C206.995 97.4433 205.365 93.5141 202.467 90.6161C199.569 87.7182 195.64 86.088 191.542 86.0833ZM195.958 103.75H193.75V105.958C193.75 106.544 193.517 107.106 193.103 107.52C192.689 107.934 192.127 108.167 191.542 108.167C190.956 108.167 190.394 107.934 189.98 107.52C189.566 107.106 189.333 106.544 189.333 105.958V103.75H187.125C186.539 103.75 185.978 103.517 185.563 103.103C185.149 102.689 184.917 102.127 184.917 101.542C184.917 100.956 185.149 100.394 185.563 99.9801C185.978 99.566 186.539 99.3333 187.125 99.3333H189.333V97.125C189.333 96.5393 189.566 95.9776 189.98 95.5635C190.394 95.1493 190.956 94.9167 191.542 94.9167C192.127 94.9167 192.689 95.1493 193.103 95.5635C193.517 95.9776 193.75 96.5393 193.75 97.125V99.3333H195.958C196.544 99.3333 197.106 99.566 197.52 99.9801C197.934 100.394 198.167 100.956 198.167 101.542C198.167 102.127 197.934 102.689 197.52 103.103C197.106 103.517 196.544 103.75 195.958 103.75Z" fill="white"/></g><defs><clipPath id="clip0_101_12"><rect width="53" height="53" fill="white" transform="translate(154 64)"/></clipPath></defs></svg>
        </div>
        <div className="flex flex-col items-center justify-end pt-2 text-center text-base leading-loose text-black" >
          <div className="flex flex-grow justify-center self-stretch">
            Create a new project
          </div>
        </div>
        <div className="text-left text-xs leading-loose">
          <span className="text-black">{"or try a "}</span>
          <span className="text-orange-500">sample project</span>
        </div>
      </div>
    </div>
      <div className="dashboard" >
        <h1>cards</h1>

        <div className="cards-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleSelectCard(card)}
            >
              <img src={card.imageUrl} alt={card.title} />
              <p>{card.title}</p>
            </div>
          ))}
        </div>

        <div className="create-form">
          <input
            type="text"
            name="title"
            value={newCard.title}
            placeholder="Card Title"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imageUrl"
            value={newCard.imageUrl}
            placeholder="Image URL"
            onChange={handleInputChange}
          />
          <button className='btn' onClick={handleCreateCard}>Create Card</button>
        </div>

        {selectedCard && (
          <div className="card-details-modal">
            <h2>{selectedCard.title}</h2>
            <img src={selectedCard.imageUrl} alt={selectedCard.title} />
            <button className='btn' onClick={handleEditCard}>Edit Card</button>
            <button className='btn' onClick={handleDeleteCard}>Delete Card</button>
          </div>
        )}
      </div>
    
  </div>
  )
}

export default Home