import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box
} from "@chakra-ui/react";
import "./model.css";

function Model(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className="button-1" onClick={onOpen}>
        Open
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          style={{
            backgroundColor: "black",
            color: "white",
            marginTop: "6%",
            width: "50%",
            marginLeft: "25%"
          }}
        >
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <h3 className="heading">
                ID:<span className="des">{props.id}</span>
              </h3>

              <h3 className="heading">
                ID:<span className="des">{props.org}</span>
              </h3>

              <h3 className="heading">
                CLIENT NAME:<span className="des">{props.name}</span>
              </h3>

              <h3 className="heading">
                COMMENT:<span className="des">{props.detail}</span>
              </h3>
              <textarea
                style={{
                  border: "2px solid red",
                  height: "80px",
                  width: "80%",
                  marginLeft: "10%"
                }}
              ></textarea>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button style={{ marginRight: "10px" }} className="button-1">
              Update
            </Button>

            <Button className="button-1">pending</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { Model };
