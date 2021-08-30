import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("count is 0 when mounted", async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count: 0");
  });

  it("count is 4 when step is 4 and click once", async () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.find(".myInput");
    input.element.value = 4;
    input.trigger("input");
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count: 4");
  });

  it("count is -1 when click decrement once", async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find(".decrement").trigger("click");
    expect(wrapper.html()).toContain("Count: -1");
  });
});
