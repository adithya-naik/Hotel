import React, { useState, useEffect } from 'react';
import CulturalActivitiesCard from '../components/CulturalActivityCard';

const EntertainmentPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('http://localhost/backend.myistay/fetch_entertrainments.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Entertainment</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {activities.map((activity) => (
          <CulturalActivitiesCard
            key={activity.id}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            location={activity.location}
            time={activity.time}
            participants={activity.participants}
            price={activity.price}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EntertainmentPage;
