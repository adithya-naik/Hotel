import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CalendarDays, 
  MapPin, 
  Clock 
} from 'lucide-react';

const EventCalendar = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Days from previous month to fill initial week
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Previous month's days
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  }, [currentDate]);

  // Filter events for the selected month
  const monthEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear();
    });
  }, [events, currentDate]);

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return monthEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Navigation handlers
  const handlePreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Format month and year
  const formatMonthYear = () => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  // Render day grid
  const renderCalendarGrid = () => {
    return (
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="font-bold text-gray-600 text-sm">{day}</div>
        ))}
        
        {calendarDays.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} />;
          
          const isToday = day.toDateString() === new Date().toDateString();
          const hasEvents = getEventsForDate(day).length > 0;
          
          return (
            <div 
              key={day.toDateString()}
              onClick={() => setSelectedDate(day)}
              className={`
                p-2 cursor-pointer rounded-md 
                ${isToday ? 'bg-blue-100' : ''}
                ${selectedDate && selectedDate.toDateString() === day.toDateString() 
                  ? 'ring-2 ring-blue-500' : ''}
                hover:bg-blue-50 transition
              `}
            >
              <span className={`
                ${hasEvents ? 'font-bold text-blue-600' : 'text-gray-700'}
                ${isToday ? 'font-extrabold' : ''}
              `}>
                {day.getDate()}
              </span>
              {hasEvents && (
                <div className="h-1 w-1 bg-blue-500 rounded-full mx-auto mt-1"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Render event list
  const renderEventList = () => {
    if (!selectedDate) return null;
    
    const dateEvents = getEventsForDate(selectedDate);
    
    if (dateEvents.length === 0) {
      return (
        <div className="text-center text-gray-500 py-4">
          No events on this date
        </div>
      );
    }
    
    return (
      <div className="space-y-3 p-4 bg-gray-50 rounded-md">
        {dateEvents.map((event, index) => (
          <div 
            key={index} 
            className="bg-white p-3 rounded-md shadow-sm hover:shadow transition"
          >
            <div className="flex items-center mb-2">
              <CalendarDays size={16} className="mr-2 text-blue-500" />
              <h4 className="font-bold text-gray-800">{event.title}</h4>
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <MapPin size={16} className="mr-2 text-red-500" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-green-500" />
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button 
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-gray-200 rounded-full transition"
        >
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold">{formatMonthYear()}</h2>
        <button 
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-200 rounded-full transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Calendar Days */}
          <div>
            {renderCalendarGrid()}
          </div>
          
          {/* Event List */}
          <div>
            {renderEventList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

// Example Usage:
/*
function App() {
  const sampleEvents = [
    {
      title: "Art Exhibition",
      date: "2024-07-15",
      location: "City Art Gallery",
      time: "2:00 PM - 6:00 PM"
    },
    {
      title: "Music Festival",
      date: "2024-07-16",
      location: "Central Park",
      time: "5:00 PM - 10:00 PM"
    }
  ];

  return <EventCalendar events={sampleEvents} />;
}
*/