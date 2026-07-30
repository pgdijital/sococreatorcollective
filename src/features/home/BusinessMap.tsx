import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet';
import { divIcon, latLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Business } from '@/types/business';
import styles from './BusinessMap.module.css';
import './business-pin.css';

interface BusinessMapProps {
  businesses: Business[];
}

const SONOMA_COUNTY_CENTER: [number, number] = [38.45, -122.78];

function businessIcon() {
  return divIcon({
    className: 'business-map-pin',
    html: '<span aria-hidden="true">▶</span>',
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function FitToBusinesses({ businesses }: { businesses: Business[] }) {
  const map = useMap();
  useEffect(() => {
    if (businesses.length === 0) return;
    const bounds = latLngBounds(businesses.map((b) => [b.location.lat, b.location.lng]));
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 11 });
  }, [businesses, map]);
  return null;
}

export function BusinessMap({ businesses }: BusinessMapProps) {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={SONOMA_COUNTY_CENTER}
        zoom={10}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitToBusinesses businesses={businesses} />
        {businesses.map((business) => (
          <Marker
            key={business.id}
            position={[business.location.lat, business.location.lng]}
            icon={businessIcon()}
            eventHandlers={{
              click: () => {
                const url = business.videos[0]?.url;
                if (url) window.open(url, '_blank', 'noopener,noreferrer');
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -14]}>
              {business.name} · {business.town}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
