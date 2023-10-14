import { Minus, Plus } from '@tamagui/lucide-icons'
import { Button, H3, Paragraph, XStack, YStack } from 'tamagui'

import useAppStore from '@/store/app'

const Home = () => {
  const { value, setValue } = useAppStore((state) => state)
  return (
    <YStack
      flex={1}
      padding="$4"
      space="$true"
      backgroundColor="$background"
      justifyContent="center"
    >
      <H3 textAlign="center">title_placeholder</H3>
      <Paragraph alignSelf="center">value: {value}</Paragraph>
      <XStack justifyContent="space-evenly">
        <Button
          onPress={() => setValue(value - 1)}
          icon={Minus}
        />
        <Button
          onPress={() => setValue(value + 1)}
          icon={Plus}
        />
      </XStack>
    </YStack>
  )
}

export default Home
