import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KantoMap from './Kanto_Region_Map.png'; // Import the image from the components folder

const InteractiveMap = () => {
  const [description, setDescription] = useState('');
  const [clickPosition, setClickPosition] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to handle click on the image map
  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const y = event.clientY - rect.top;  // y position within the element
    setClickPosition({ x, y });

    if (x >= 476 && x <= 508 && y >= 763 && y <= 799) {
      setDescription('Route 1');
      setLocation('88');
    } else if (x >= 480 && x <= 512 && y >= 631 && y <= 665) {
      setDescription('Viridian City');
      setLocation('Viridian_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 478 && x <= 506 && y >= 529 && y <= 559) {
      setDescription('Route 2');
      setLocation('Route_2'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 472 && x <= 496 && y >= 429 && y <= 453) {
      setDescription('Viridian Forest');
      setLocation('Viridian_Forest'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 476 && x <= 512 && y >= 293 && y <= 319) {
      setDescription('Pewter City');
      setLocation('Pewter_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 714 && x <= 752 && y >= 293 && y <= 317) {
      setDescription('Route 3');
      setLocation('Route_3'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 914 && x <= 942 && y >= 185 && y <= 207) {
      setDescription('Mt. Moon');
      setLocation('Mt._Moon'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1090 && x <= 1116 && y >= 241 && y <= 269) {
      setDescription('Route 4');
      setLocation('Route_4'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1292 && x <= 1338 && y >= 229 && y <= 281) {
      setDescription('Cerulean City');
      setLocation('Cerulean_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1298 && x <= 1338 && y >= 333 && y <= 355) {
      setDescription('Route 5');
      setLocation('Route_5'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1298 && x <= 1338 && y >= 479 && y <= 511) {
      setDescription('Saffron City');
      setLocation('Saffron_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1290 && x <= 1334 && y >= 569 && y <= 603) {
      setDescription('Route 6');
      setLocation('Route_6'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1178 && x <= 1214 && y >= 485 && y <= 513) {
      setDescription('Route 7');
      setLocation('Route_7'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1506 && x <= 1530 && y >= 483 && y <= 517) {
      setDescription('Route 8');
      setLocation('Route_8'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1542 && x <= 1578 && y >= 237 && y <= 263) {
      setDescription('Route 9');
      setLocation('Route_9'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1746 && x <= 1770 && y >= 247 && y <= 269) {
      setDescription('Rock Tunnel');
      setLocation('Rock_Tunnel'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1742 && x <= 1774 && y >= 387 && y <= 415) {
      setDescription('Route 10');
      setLocation('Route_10'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1744 && x <= 1794 && y >= 477 && y <= 519) {
      setDescription('Lavender Town');
      setLocation('Lavender_Town'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1296 && x <= 1336 && y >= 751 && y <= 793) {
      setDescription('Vermillion City');
      setLocation('Vermillion_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1582 && x <= 1610 && y >= 755 && y <= 785) {
      setDescription('Route 11');
      setLocation('Route_11'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1796 && x <= 1836 && y >= 633 && y <= 673) {
      setDescription('Route 12');
      setLocation('Route_12'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1592 && x <= 1624 && y >= 971 && y <= 1001) {
      setDescription('Route 13');
      setLocation('Route_13'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1398 && x <= 1442 && y >= 1059 && y <= 1089) {
      setDescription('Route 14');
      setLocation('Route_14'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 1152 && x <= 1186 && y >= 1117 && y <= 1145) {
      setDescription('Route 15');
      setLocation('Route_15'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 934 && x <= 984 && y >= 429 && y <= 471) {
      setDescription('Celadon City');
      setLocation('Celadon_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 800 && x <= 834 && y >= 423 && y <= 453) {
      setDescription('Route 16');
      setLocation('Route_16'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 706 && x <= 738 && y >= 673 && y <= 713) {
      setDescription('Route 17');
      setLocation('Route_17'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 848 && x <= 886 && y >= 1113 && y <= 1141) {
      setDescription('Route 18');
      setLocation('Route_18'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 982 && x <= 1026 && y >= 1117 && y <= 1135) {
      setDescription('Fuchsia City');
      setLocation('Fuchsia_City'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 996 && x <= 1028 && y >= 1189 && y <= 1227) {
      setDescription('Route 19');
      setLocation('Route_19'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 886 && x <= 930 && y >= 1297 && y <= 1333) {
      setDescription('Route 20');
      setLocation('Route_20'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 758 && x <= 792 && y >= 1307 && y <= 1329) {
      setDescription('Seafoam Islands');
      setLocation('Seafoam_Islands'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 436 && x <= 482 && y >= 1277 && y <= 1323) {
      setDescription('Cinnabar Island');
      setLocation('Cinnabar_Island'); // Adjust to match the Bulbapedia URL format
    } else if (x >= 438 && x <= 476 && y >= 1131 && y <= 1089) {
        setDescription('Route 21');
        setLocation('Route_21'); // Adjust to match the Bulbapedia URL format
      } else if (x >= 470 && x <= 508 && y >= 913 && y <= 941) {
        setDescription('Pallet Town');
        setLocation('Pallet_Town'); // Adjust to match the Bulbapedia URL format
      } else if (x >= 312 && x <= 352 && y >= 631 && y <= 665) {
        setDescription('Route 22');
        setLocation('Route_22'); // Adjust to match the Bulbapedia URL format
      } else if (x >= 238 && x <= 264 && y >= 517 && y <= 551) {
        setDescription('Route 23');
        setLocation('Route_23'); // Adjust to match the Bulbapedia URL format
      } else if (x >= 236 && x <= 268 && y >= 301 && y <= 327) {
        setDescription('Victory Road');
        setLocation('Victory_Road'); // Adjust to match the Bulbapedia URL format
      } else if (x >= 234 && x <= 282 && y >= 167 && y <= 217) {
        setDescription('Indigo Plateau');
        setLocation('Indigo_Plateau'); // Adjust to match the Bulbapedia URL format
      } else {
        setDescription('');
        setLocation('');
      }
    };
  
    // Function to handle Learn More button click
    const handleLearnMore = () => {
      if (location) {
        // Redirect to Bulbapedia URL based on location
        window.open(`https://bulbapedia.bulbagarden.net/wiki/${location}`, '_blank');
      }
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1>Kanto Region Map</h1>
        <div style={{ position: 'relative', width: '100%', maxWidth: '2000px' }}>
          <img
            src={KantoMap}
            alt="Kanto Region Map"
            style={{ width: '100%', maxWidth: '2000px', cursor: 'pointer' }}
            onClick={handleClick}
          />
          {clickPosition && (
            <>
              <div
                style={{
                  position: 'absolute',
                  left: `${clickPosition.x}px`,
                  top: `${clickPosition.y}px`,
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'blue',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {description && !description.startsWith('Route') && ( // Check if description is not a Route
                <div
                  style={{
                    position: 'absolute',
                    left: `${clickPosition.x - 40}px`, // Adjust to position the description box to the left
                    top: `${clickPosition.y}px`,
                    width: '140px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '10px',
                    borderRadius: '5px',
                    transform: 'translate(-100%, -50%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p>{description}</p>
                  <button onClick={handleLearnMore}>Learn More</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default InteractiveMap;
  