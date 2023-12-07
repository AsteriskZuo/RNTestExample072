/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  CallUser,
  GlobalContainer as CallKit,
} from 'react-native-agora-chat-callkit';
import {GlobalContainer as UIKit} from 'react-native-agora-chat-uikit';
import {ChatClient} from 'react-native-chat-sdk';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Test() {
  React.useEffect(() => {
    setTimeout(() => {
      ChatClient.getInstance().chatManager.addMessageListener({});
    }, 3000);
  }, []);

  return (
    <UIKit
      option={{
        appKey: 'sdf',
        autoLogin: false,
        debugModel: true,
        pushConfig: {},
        requireAck: false,
        requireDeliveryAck: false,
      }}>
      <CallKit
        option={{
          appKey: 'sdf',
          agoraAppId: 'sdf',
        }}
        requestRTCToken={function (_params: {
          appKey: string;
          channelId: string;
          userId: string;
          userChannelId?: number;
          type?: 'easemob' | 'agora';
          onResult: (params: {data?: any; error?: any}) => void;
        }): void {
          throw new Error('Function not implemented.');
        }}
        requestUserMap={function (_params: {
          appKey: string;
          channelId: string;
          userId: string;
          onResult: (params: {data?: any; error?: any}) => void;
        }): void {
          throw new Error('Function not implemented.');
        }}
        requestCurrentUser={function (_params: {
          onResult: (params: {user: CallUser; error?: any}) => void;
        }): void {
          throw new Error('Function not implemented.');
        }}>
        <View />
      </CallKit>
    </UIKit>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
        <Test />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
