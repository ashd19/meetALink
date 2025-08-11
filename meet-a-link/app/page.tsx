"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import CardBanner from '@/components/card-04'

function Page() {
  const [cards, setCards] = useState([
    { title: '23 RD July Batch', time: '8:15 PM', link: 'https://google.com' },
    { title: '30 Th July Batch', time: '6:15 PM', link: 'https://google.com' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', time: '', link: '' });

  const handleInputChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCard = (e:any) => {
    e.preventDefault();
    if (form.title && form.time && form.link) {
      setCards([...cards, { ...form }]);
      setForm({ title: '', time: '', link: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="heading">
          <Button className="flex items-center mb-5" onClick={() => setShowForm(!showForm)}>
            Create links
          </Button>
        </div>
      </div>
       <h1>ash</h1>
      {showForm && (
        <form onSubmit={handleAddCard} className="mb-6 flex flex-col gap-2 items-center">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 text-black"
            required
          />
          <input
            name="time"
            placeholder="Time (e.g. 8:15 PM)"
            value={form.time}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 text-black"
            required
          />
          <input
            name="link"
            placeholder="Link"
            value={form.link}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 text-black"
            required
          />
          <Button type="submit" className="mt-2">Add</Button>
        </form>
      )}

      <div className='flex flex-row gap-5'>
        {cards.map((card, idx) => (
          <CardBanner key={idx} title={card.title} time={card.time} link={card.link} />
        ))}
      </div>
    </div>
  )
}

export default Page
