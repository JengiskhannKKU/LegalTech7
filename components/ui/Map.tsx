'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Maximize, Layers, AlertTriangle } from 'lucide-react';

// Fix Leaflet default icon issue
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const customIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface MapProps {
    center: [number, number];
    zoom?: number;
    markers?: Array<{ position: [number, number]; title: string; content?: React.ReactNode }>;
    circles?: Array<{ center: [number, number]; radius: number; color?: string; fillColor?: string }>;
    riskZones?: Array<{ center: [number, number]; radius: number; level: 'high' | 'medium' | 'low'; type: string }>;
    constructionChanges?: Array<{ location: { lat: number, lng: number }; type: string }>;
    className?: string;
    minimal?: boolean;
}

// Component to handle map resizing
const MapResizer = () => {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }, [map]);
    return null;
};

const MapComponent = ({ center, zoom = 13, markers = [], circles = [], riskZones = [], constructionChanges = [], className = '', minimal = false }: MapProps) => {
    const [mapType, setMapType] = useState<'streets' | 'satellite'>('streets');

    return (
        <div className={`relative isolate ${className}`}>
            <MapContainer
                key={`${center[0]}-${center[1]}-${zoom}`}
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
                <MapResizer />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url={mapType === 'streets'
                        ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    }
                />

                {markers.map((marker, idx) => (
                    <Marker key={idx} position={marker.position} icon={customIcon}>
                        <Popup>{marker.content || marker.title}</Popup>
                    </Marker>
                ))}

                {circles.map((circle, idx) => (
                    <Circle
                        key={idx}
                        center={circle.center}
                        radius={circle.radius}
                        pathOptions={{ color: circle.color || 'red', fillColor: circle.fillColor || '#f03', fillOpacity: 0.2 }}
                    />
                ))}

                {riskZones.map((zone, idx) => (
                    <Circle
                        key={`risk-${idx}`}
                        center={zone.center}
                        radius={zone.radius}
                        pathOptions={{
                            color: zone.level === 'high' ? '#ef4444' : zone.level === 'medium' ? '#f97316' : '#22c55e',
                            fillColor: zone.level === 'high' ? '#ef4444' : zone.level === 'medium' ? '#f97316' : '#22c55e',
                            fillOpacity: 0.3,
                            dashArray: '5, 10' // Dashed line for "Analysed Zone" look
                        }}
                    >
                        <Popup>
                            <div className="text-center">
                                <b className="text-navy">{zone.type} Risk Zone</b><br />
                                Severity: <span className="uppercase font-bold">{zone.level}</span>
                            </div>
                        </Popup>
                    </Circle>
                ))}

                {constructionChanges.map((change, idx) => (
                    <Marker
                        key={`const-${idx}`}
                        position={[change.location.lat, change.location.lng]}
                        icon={L.divIcon({
                            className: 'bg-transparent',
                            html: `<div class="w-8 h-8 rounded-full border-4 border-red-600 animate-ping bg-red-400/50"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-700 rounded-full border-2 border-white"></div>`
                        })}
                    >
                        <Popup>
                            <div className="text-center">
                                <b className="text-red-600 flex items-center gap-1 justify-center"><AlertTriangle className="w-3 h-3" /> ALERT</b>
                                <span className="text-xs">Unauthorized Structure Detected</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {constructionChanges.length > 0 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[500]">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-bold text-sm">ตรวจพบสิ่งปลูกสร้างใหม่!</span>
                    </div>
                </div>
            )}

            {/* Map Controls */}
            {!minimal && (
                <div className="absolute top-4 right-4 z-[500] bg-white p-2 rounded shadow-md flex gap-2">
                    <button
                        onClick={() => setMapType('streets')}
                        className={`p-2 text-xs font-bold rounded ${mapType === 'streets' ? 'bg-navy text-white' : 'bg-gray-100 text-text'}`}
                    >
                        แผนที่
                    </button>
                    <button
                        onClick={() => setMapType('satellite')}
                        className={`p-2 text-xs font-bold rounded ${mapType === 'satellite' ? 'bg-navy text-white' : 'bg-gray-100 text-text'}`}
                    >
                        ดาวเทียม
                    </button>
                </div>
            )}

            {/* Mock GIS Overlay Legend */}
            {!minimal && (
                <div className="absolute bottom-4 left-4 z-[500] bg-white/90 backdrop-blur p-3 rounded shadow-lg border border-gray-200">
                    <p className="text-xs font-bold text-navy mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3" /> GIS Layers
                    </p>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px]">
                            <span className="w-3 h-3 rounded-full border border-red-500 bg-red-500/20"></span>
                            <span>Risk Zone (High)</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px]">
                            <span className="w-3 h-3 rounded-full border border-gold bg-gold/20"></span>
                            <span>Land Boundary</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
