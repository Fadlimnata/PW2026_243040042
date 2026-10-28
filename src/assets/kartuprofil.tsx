interface KartuProfilProps {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl?: string;
}

export default function KartuProfil({ nama, npm, kelas, status, fotoUrl }: KartuProfilProps) {
  return (
    <div style={{
      border: '1px solid #D8D7DE',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      maxWidth: '450px',
      marginBottom: '20px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={fotoUrl || 'https://via.placeholder.com/80'}
          alt={`Foto ${nama}`}
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <h3 style={{ margin: '0 0 4px 0', color: '#1B365D' }}>{nama}</h3>
          <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>NPM: {npm}</p>
          <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>Kelas: {kelas}</p>
          <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>Status: {status}</p>
        </div>
      </div>
    </div>
  );
}