export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bike: {
        Row: {
          bikeimagepath: string | null
          bikename: string | null
          bikenotes: string | null
          bikeuuid: string | null
          created_at: string
          id: number
        }
        Insert: {
          bikeimagepath?: string | null
          bikename?: string | null
          bikenotes?: string | null
          bikeuuid?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          bikeimagepath?: string | null
          bikename?: string | null
          bikenotes?: string | null
          bikeuuid?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      part: {
        Row: {
          created_at: string
          id: number
          partimagepath: string | null
          partname: string | null
          partnotes: string | null
          parttype: string | null
          partuuid: string | null
          refbikeuuid: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          partimagepath?: string | null
          partname?: string | null
          partnotes?: string | null
          parttype?: string | null
          partuuid?: string | null
          refbikeuuid?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          partimagepath?: string | null
          partname?: string | null
          partnotes?: string | null
          parttype?: string | null
          partuuid?: string | null
          refbikeuuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "part_refbikeuuid_fkey"
            columns: ["refbikeuuid"]
            isOneToOne: false
            referencedRelation: "bike"
            referencedColumns: ["bikeuuid"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      part_type:
        | "fork"
        | "frame"
        | "crankset"
        | "front_derailleur"
        | "rear_derailleur"
        | "chain"
        | "cassette"
        | "break_caliper"
        | "pedal"
        | "wheelset"
        | "front_tyre"
        | "hub"
        | "spokes"
        | "handlebar"
        | "stem"
        | "headset"
        | "bar_tape"
        | "grip"
        | "saddle"
        | "seatpost"
        | "seatpost_clamp"
        | "motor"
        | "battery"
        | "display"
        | "bottle_cage"
        | "fender"
        | "light"
        | "rotor"
        | "shift_lever"
        | "break_lever"
        | "shift_break_lever"
        | "rear_tyre"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
