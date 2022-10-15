import { useState } from "react"
import { Button } from "./components/Button"
import { Checkbox } from "./components/Checkbox"
import { Text } from "./components/Text"
import { TextInput } from "./components/TextInput"

function App() {
  return (
    <>
      <div className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
        <Text size={"lg"} asChild={true}>
          <p className="my-8 font-bold">Login</p>
        </Text>
        <div className="w-1/2 mx-auto space-y-4">
          <TextInput.Root>
            <TextInput.Input placeholder="Enter your Email"></TextInput.Input>
          </TextInput.Root>
          <TextInput.Root>
            <TextInput.Input placeholder="Enter your Password"></TextInput.Input>
          </TextInput.Root>
          <div className="mt-8">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
