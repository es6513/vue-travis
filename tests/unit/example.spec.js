import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("count is 2", async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Count: 2");
  });
});
