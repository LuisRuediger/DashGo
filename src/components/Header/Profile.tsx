import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Luis Ruediger</Text>
            <Text color="gray.300" fontSize="small">
              Luis.Ruediger@gmail.com
            </Text>
          </Box>
        )}
        <Avatar size="md" name="Luis Ruediger" src="https://github.com/luisruediger.png"/>
      </Flex>
  )
}