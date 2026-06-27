import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Resumo',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="receitas"
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="cash" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="despesas"
        options={{
          title: 'Despesas',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="card" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="historico"
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="time" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="adicionar"
        options={{
          title: 'Adicionar',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="add-circle" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => (
          <Ionicons size={24} name="person" color={color} />
        ),
        }}
      />

    </Tabs>
  );
}