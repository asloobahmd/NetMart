import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Breadcrumb = (props) => {
  return (
    <div>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">{props.category}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{props.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumb;
