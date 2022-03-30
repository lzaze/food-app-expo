import { NativeBaseProvider, Center, List, Image } from 'native-base';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Home from './Home';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function Menu() {
    return (
    <List>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        <Card>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>Food Image</Title>
                <Paragraph>Food price</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Add to cart</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
    </List>
    
    );
}


export default () => {
    return (
      <NativeBaseProvider>
          <Home/>
          <Menu/>
      </NativeBaseProvider>
    );
}