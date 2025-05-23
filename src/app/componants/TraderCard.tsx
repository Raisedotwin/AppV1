import { Avatar, Card } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

interface IProps {
  topic?: string;
  logo?: string;
  name?: string;
  username?: string;
  url?: string;
}

const TraderCard: React.FC<IProps> = ({ logo, name, username, topic }) => {
  return (
    <NextLink href={name ? `/trader?name=${name}&logo=${logo}&username=${username}` : '#'} passHref>
      <Card
        isHoverable
        isPressable
        style={{ 
          cursor: 'pointer', 
          marginBottom: '16px', 
          backgroundColor: '#1E1E1E', 
          borderRadius: '12px', 
          padding: '12px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          width: '460px' // Adjust the width here, change to your preference
        }}
        data-testid={`session-card`}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Avatar Image */}
          <Avatar 
            src={logo} 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#333', // Placeholder background
            }}
          />

          {/* Name, Username, and Arrow Icon */}
          <div style={{ flex: 1, marginLeft: '16px', color: '#FFF', display: 'flex', alignItems: 'center' }}>
            <div style={{ flexGrow: 1 }}>
              <h5 style={{ margin: 0, fontWeight: '500', color: '#FFFFFF' }} data-testid={`session-text`}>
                {name}
              </h5>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#999' }}>
                @{username}
              </p>
            </div>

            {/* Arrow Icon (next to text) */}
            <div style={{ marginLeft: '260px', justifyItems: "flex-end" }}>
              <Image
                src={'/icons/arrow-right-icon.svg'}
                width={20}
                height={20}
                alt="session icon"
                data-testid={`session-icon`}
              />
            </div>
          </div>
        </div>
      </Card>
    </NextLink>
  );
};

export default TraderCard;

