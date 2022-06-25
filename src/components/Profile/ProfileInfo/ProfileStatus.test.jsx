import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
    test("after creation span with status be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children.length).toBe(1);
    });
    test("Проверка кооректного значения в спане", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.props.children).toBe('it-kamasutra.com');
    });
});